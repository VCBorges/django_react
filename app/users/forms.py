from django import forms
from django.urls import reverse
from app.core.forms import BaseForm

from .models import Users


# class UserCreationForm(UserCreationForm):
#     class Meta:
#         model = Users
#         fields = ('email',)


# class UserChangeForm(UserChangeForm):
#     class Meta:
#         model = Users
#         fields = ('email',)


class UserRegistrationForm(BaseForm):
    username = forms.EmailField(required=True)
    password1 = forms.CharField(required=True)
    password2 = forms.CharField(required=True)

    def clean_username(self):
        username = self.cleaned_data['username']
        if Users.objects.filter(email=username).exists():
            raise forms.ValidationError('Username is already in use.')
        return username

    def clean_password2(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError('Passwords do not match.')
        return password2

    def save(self):
        username = self.cleaned_data['username']
        password = self.cleaned_data['password1']
        Users.objects.create_user(
            email=username,
            password=password,
        )
        return {
            'next_url': reverse('login_template'),
        }
