from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, 'chat/home.html', {})

def login(request):
	return render(request, 'chat/login.html', {})

def signup(request):
	return render(request, 'chat/signup.html', {})
