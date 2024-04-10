import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
from sklearn.model_selection import train_test_split
from sklearn.model_selection import train_test_split
import pickle
accident_df=pd.read_csv('Accidents0514.csv')
q3_df=pd.DataFrame(data=accident_df,columns=['Longitude','Latitude','Junction_Detail','Location_Easting_OSGR','Location_Northing_OSGR','Urban_or_Rural_Area','Skidding_and_Overturning','Road_Type'])
X=q3_df.drop('Road_Type',axis=1)
y=q3_df['Road_Type']

X_train, X_test, y_train, y_test= train_test_split(X,y)

dtree= DecisionTreeClassifier()
dtree.fit(X_train,y_train)
predictions= dtree.predict(X_test)
print("hi")
pickle.dump(dtree, open("Road_type.pkl", "wb"))
