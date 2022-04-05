# *** open autojs server (choice)
# 
import time

# # 打開Nox
# import subprocess
# subprocess.Popen("D:\\Nox\\bin\\Nox.exe -clone:Nox_12", shell=True)
# time.sleep(80) #等待autojs連線自動執行(於模擬器中設定)


import win32gui
import re
import pyautogui

class WindowMgr:
    """Encapsulates some calls to the winapi for window management"""

    def __init__ (self):
        """Constructor"""
        self._handle = None

    def find_window(self, class_name, window_name=None):
        """find a window by its class_name"""
        self._handle = win32gui.FindWindow(class_name, window_name)

    def _window_enum_callback(self, hwnd, wildcard):
        """Pass to win32gui.EnumWindows() to check all the opened windows"""
        if re.match(wildcard, str(win32gui.GetWindowText(hwnd))) is not None:
            self._handle = hwnd

    def find_window_wildcard(self, wildcard):
        """find a window whose title matches the wildcard regex"""
        self._handle = None
        win32gui.EnumWindows(self._window_enum_callback, wildcard)

    def set_foreground(self):
        """put the window in the foreground"""
        win32gui.SetForegroundWindow(self._handle)


w = WindowMgr()
w.find_window_wildcard(".*Visual Studio.*") #vscode need to be opened
w.set_foreground()

from win32con import WM_INPUTLANGCHANGEREQUEST
import win32api
result = win32api.SendMessage(
    win32gui.GetForegroundWindow(),
    WM_INPUTLANGCHANGEREQUEST,
    0,
    0x0409)
if result == 0:
    print('設定英文鍵盤成功！')


pyautogui.keyDown("ctrl")
pyautogui.press("`")
pyautogui.keyUp("ctrl")
time.sleep(3)

pyautogui.keyDown("ctrl")
pyautogui.press("o")
pyautogui.keyUp("ctrl")
time.sleep(3)

pyautogui.typewrite("open&play_daily.js") #要開啟的檔案名
pyautogui.press("enter")
time.sleep(1)

pyautogui.press("f5")