from django.contrib.auth.forms import UserChangeForm, UserCreationForm

from .models import Users


class UserCreationForm(UserCreationForm):
    class Meta:
        model = Users
        fields = ('email',)


class UserChangeForm(UserChangeForm):
    class Meta:
        model = Users
        fields = ('email',)