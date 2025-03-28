from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin

# Unregister the default User admin
admin.site.unregister(User)

# Re-register User with custom admin settings
@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'is_staff', 'is_superuser', 'last_login')
    search_fields = ('username', 'email')
    list_filter = ('is_staff', 'is_superuser')

