from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("game.html")

@app.route("/play", methods=["POST"])
def play():
    player1 = request.form["player1"]
    player2 = request.form["player2"]

    if player1 == player2:
        result = "Tie"
    elif (player1 == "rock" and player2 == "scissors") or (player1 == "scissors" and player2 == "paper") or (player1 == "paper" and player2 == "rock"):
        result = "Player 1 Wins!"
    else:
        result = "Player 2 Wins!"

    return render_template("game.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)
