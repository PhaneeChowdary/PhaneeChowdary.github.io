from django.shortcuts import render
from django.http import HttpResponse
import pickle


# Create your views here.
def home(request):
    return render(request, 'index.htm')

def project_diabetes(request):
    return render(request, 'diabetes.htm')

def project_iris(request):
    return render(request, 'iris.htm')

def project_heart(request):
    return render(request, 'heart.htm')

def project_titanic(request):
    return render(request, 'titanic.htm')

# Titanic Project
def titanic_prediction(PClass, Sex, SibSp, Parch):
    model = pickle.load(open('model/titanic_rfc.pkl', 'rb+'))
    pred =  model.predict([[PClass, Sex, SibSp, Parch]])
    proba = model.predict_proba([[PClass, Sex, SibSp, Parch]])
    return pred,proba

def titanic_submit(request):
    pclass = int(request.POST['PClass'])
    sex = int(request.POST['Sex'])
    sibsp = int(request.POST['SibSp'])
    parch = int(request.POST['Parch'])

    predicted, probability = titanic_prediction(pclass, sex, sibsp, parch)
    if predicted:   #If survived
        probability = round(probability[0][1],3)*100
    else:   #If not survived
        probability = round(probability[0][0], 3)*100
    return render(request, 'titanic.htm', {'Predicted' : predicted, "Probability":probability})


# Diabetes Project
def diabetes_prediction(pregnancies, glucouse, bp, skinthickness, insulin, bmi, dpf, age):
    model = pickle.load(open('model/diabetes_rfc.pkl', 'rb+'))
    scaler = pickle.load(open("model/scaler.sav", 'rb'))
    inputs = [[pregnancies, glucouse, bp, skinthickness, insulin, bmi, dpf, age]]
    pred = model.predict(scaler.transform(inputs))
    proba = model.predict_proba(scaler.transform(inputs))
    return pred,proba

def diabetes_submit(request):
    pregnancies = int(request.POST['Pregnancies'])
    glucouse = int(request.POST['Glucose'])
    bp = int(request.POST['BloodPressure'])
    skinthickness = int(request.POST['SkinThickness'])
    insulin = int(request.POST['Insulin'])
    bmi =  float(request.POST['BMI'])
    dpf =  float(request.POST['DiabetesPedigreeFunction'])
    age = int(request.POST['Age'])

    predicted, probability = diabetes_prediction(pregnancies, glucouse, bp, skinthickness, insulin, bmi, dpf, age)
    probability = round(probability[0][predicted][0], 3)*100
    return render(request, 'diabetes.htm', {'Predicted' : predicted, "Probability":probability})


# Iris Project
def iris_prediction(slen, swid, plen,pwid):
    model = pickle.load(open('model/iris_log.pkl', 'rb+'))
    inputs = [[slen, swid, plen, pwid]]
    pred = model.predict(inputs)
    proba = model.predict_proba(inputs)
    return pred, proba

def iris_submit(request):
    slen = float(request.POST['SepalLengthCm'])
    swid = float(request.POST['SepalWidthCm'])
    plen = float(request.POST['PetalLengthCm'])
    pwid = float(request.POST['PetalWidthCm'])

    predicted, probability = iris_prediction(slen, swid, plen, pwid)
    probability = round(probability[0][predicted[0]], 3)*100
    predicted = predicted[0]
    return render(request, 'iris.htm', {'Predicted' : predicted, "Probability":probability})


# Heart Project
def heart_prediction(age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope,ca, thal):
    model = pickle.load(open('model/heart_dtc.pkl', 'rb+'))
    inputs = [[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope,ca, thal]]
    pred = model.predict(inputs)
    proba = model.predict_proba(inputs)
    return pred, proba

def heart_submit(request):
    age = int(request.POST['age']); sex = int(request.POST['sex'])
    cp = int(request.POST['cp']); trestbps = int(request.POST['trestbps'])
    chol = int(request.POST['chol']); fbs = int(request.POST['fbs'])
    restecg = int(request.POST['restecg']); thalach = int(request.POST['thalach'])
    exang = int(request.POST['exang']); oldpeak = float(request.POST['oldpeak'])
    slope = int(request.POST['slope']); ca = int(request.POST['ca'])
    thal = int(request.POST['thal'])

    predicted, probability = heart_prediction(age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope,ca, thal)
    probability = round(probability[0][predicted[0]], 3)*100
    predicted = predicted[0]
    return render(request, 'heart.htm', {'Predicted' : predicted, "Probability":probability})