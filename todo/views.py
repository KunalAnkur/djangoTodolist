from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

items=[]
# workItem=[]

def home(request):
    return render(request,'list.html',{'listTitle':'Today','newListItems':items})
   

def add(request):
    item= request.POST['newItem']
    items.append(item)

    return render(request,'list.html',{'listTitle':'Today','newListItems':items})