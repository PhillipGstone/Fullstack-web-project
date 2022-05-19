from flask import render_template, redirect, Blueprint, request, url_for


my_view = Blueprint('my_view', __name__) 

@my_view.route("/") 
def home():
    return render_template("index.html")  

@my_view.route("/ships") 
def ships():
    return render_template("ships.html")  

@my_view.route("/community") 
def community():
    return render_template("community.html")  

@my_view.route("/game_news") 
def game_news():
    return render_template("game_news.html") 

@my_view.route("/factions") 
def factions():
    return render_template("factions.html")  

# @my_view.route("/admin")  
# def admin():
#     return render_template("admin.html") 

@my_view.route("/home")
def home_redirect():
    return redirect(url_for("my_view.home")) 

@my_view.route("/homepage")
def homeb_redirect():
    return redirect(url_for("my_view.home"))

@my_view.route("/js")
def js_redirect():
    return redirect(url_for("my_view.home"))

@my_view.route("/javascript")
def javascript_redirect():
    return redirect(url_for("my_view.home"))