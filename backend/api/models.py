from django.db import models
from django.contrib.auth.models import User

class Setting(models.Model):
    #user_profile
    pfp_url = models.CharField()
    bio = models.CharField(max_length=50)
    country = models.CharField(max_length=20)
    birthday = models.DateField()

    #application preferences
    show_location = models.BooleanField()
    allow_adds = models.BooleanField() #dont confuse this with ads

    #foreign key
    username = models.ForeignKey(User, on_delete=models.CASCADE, related_name="settings")

    def __str__(self):
        return self.name


