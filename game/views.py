from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.db.models import Max
from django.contrib.auth.models import User
from .models import UserProfile, Score
from .models import GameOfTheWeek, Comment
from .forms import CommentForm
from django.shortcuts import render
from .models import GameOfTheWeek, Comment


# ------------------------------
# Home
# ------------------------------
from django.db.models import Max
from django.shortcuts import render
from .models import Score

def home(request):
    # Top 6 users by best score
    top_scores = (
        Score.objects.values('user__username')
        .annotate(best_score=Max('score'), latest=Max('date'))
        .order_by('-best_score')[:6]
    )

    # Get the usernames already in top_scores
    top_usernames = [entry['user__username'] for entry in top_scores]

    # Bottom 6 users, excluding top users
    bottom_scores = (
        Score.objects.values('user__username')
        .annotate(best_score=Max('score'), latest=Max('date'))
        .exclude(user__username__in=top_usernames)
        .order_by('best_score')[:6]
    )

    return render(request, 'game/home.html', {
        'top_scores': top_scores,
        'bottom_scores': bottom_scores,
    })


# ------------------------------
# Register
# ------------------------------
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            UserProfile.objects.create(user=user)  # Automatically create profile
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'game/register.html', {'form': form})

# ------------------------------
# Leaderboard
# ------------------------------
@login_required
def leaderboard(request):
    scores = Score.objects.all().order_by('-score')[:10]  # Top 10
    return render(request, 'game/leaderboard.html', {'scores': scores})

# ------------------------------
# User Profile
# ------------------------------
@login_required
def user_profile(request, user_id):
    profile = get_object_or_404(UserProfile, user__id=user_id)
    latest_scores = profile.latest_scores()
    ranking = profile.get_ranking()

    return render(request, 'game/user_profile.html', {
        'profile': profile,
        'latest_scores': latest_scores,
        'ranking': ranking,
    })

# ------------------------------
# Game Detail
# ------------------------------
@login_required
def game_detail(request, game_id):
    game = get_object_or_404(GameOfTheWeek, id=game_id)
    comments = Comment.objects.filter(game=game)

    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.user = request.user
            comment.game = game
            comment.save()
            return redirect('game_detail', game_id=game.id)
    else:
        form = CommentForm()

    return render(request, 'game/game_detail.html', {
        'game': game,
        'comments': comments,
        'form': form,
    })

# ------------------------------
# Games Page
# ------------------------------
@login_required
def games_page(request):
    games = GameOfTheWeek.objects.all()
    return render(request, 'game/games_page.html', {'games': games})


# ------------------------------
# Comments 
# ------------------------------

def games_page(request):
    games = GameOfTheWeek.objects.all()
    comments = Comment.objects.all().order_by('-created_at')  # Get all comments, newest first
    
    context = {
        'games': games,
        'comments': comments,
    }
    
    return render(request, 'game/games_page.html', context)



