from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import UserProfile, Score


# ------------------------------
# Home
# ------------------------------
def home(request):
    return render(request, 'game/home.html')

# ------------------------------
# User Profile
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
