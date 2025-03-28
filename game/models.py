from django.db import models
from django.contrib.auth.models import User

# ------------------------------
# User Profile
# ------------------------------
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)

    def __str__(self):
        return self.user.username

    def latest_scores(self):
        return Score.objects.filter(user=self.user).order_by('-score')[:5]  # Get latest 5 scores

    def get_ranking(self):
        scores = Score.objects.values('user').annotate(highest=models.Max('score')).order_by('-highest')
        for rank, entry in enumerate(scores, 1):
            if entry['user'] == self.user.id:
                return rank
        return None

# ------------------------------
# Score Model
# ------------------------------
class Score(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.PositiveIntegerField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username} - {self.score}'

# ------------------------------
# Game of the Week
# ------------------------------
class GameOfTheWeek(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

# ------------------------------
# Comment / Review
# ------------------------------
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(GameOfTheWeek, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Comment by {self.user.username} on {self.game.title}'
