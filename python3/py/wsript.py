import sys, win32com.client
import os , platform
from datetime import datetime

atime = os.path.getatime("D:\\Nicko\\Pictures\\Mypictures\\2323.jpg")
ctime = os.path.getctime("D:\\Nicko\\Pictures\\Mypictures\\2323.jpg")
mtime = os.path.getmtime("D:\\Nicko\\Pictures\\Mypictures\\2323.jpg")
print(datetime.fromtimestamp(atime))
print(datetime.fromtimestamp(ctime))
print(datetime.fromtimestamp(mtime))