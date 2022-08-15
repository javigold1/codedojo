from flask import Flask, render_template, redirect, request, session
app = Flask(__name__)
app.secret_key = 'banana'

@app.route('/')
def default():
    if 'count' in session:
        session['count'] += 1
    else:
        session['count'] = 0

    return render_template('counter.html',counter = session['count'])

@app.route('/add')
def add3():
    if 'count' in session:
        session['count'] += 2
    else:
        session['count'] = 3
    return redirect('/')


@app.route('/destroy_session')
def destory_session():
    session.clear()		# clears all keys
    return redirect('/')



if __name__ == "__main__":   
    app.run(debug=True)