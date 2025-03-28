from django.contrib import admin
from .models import UserProfile, Score, GameOfTheWeek, Comment


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'bio')

@admin.register(Score)
class ScoreAdmin(admin.ModelAdmin):
    list_display = ('user', 'score', 'date')
    list_filter = ('date',)
    search_fields = ('user__username',)

@admin.register(GameOfTheWeek)
class GameOfTheWeekAdmin(admin.ModelAdmin):
    list_display = ('title', 'start_date', 'end_date', 'active')
    list_filter = ('active',)

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'game', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('user__username', 'game__title')
