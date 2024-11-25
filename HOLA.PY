from gpio import *
from time import *

# Definición de pines
SALIDA = 2
ENTRADA = 1  # Slot D0 del sensor

def control_door(state):
    if(state == "locked"):
    	customWrite(0, "0,1")
    elif(state == "unlocked"):
    	customWrite(0, "0,0")
    elif(state == "open"):
    	customWrite(0, "1,0")
    elif(state == "closed"):
    	customWrite(0, "1,0")

def main():
    pinMode(ENTRADA, IN)
	pinMode(SALIDA, IN)
	control_door("closed")
	control_door("locked")
    while True:
        
        if digitalRead(ENTRADA):
            control_door("unlocked")
            control_door("open")
        elif digitalRead(SALIDA):
        	control_door("unlocked")
            control_door("open")
        else:
        	control_door("closed")
			control_door("locked")
if __name__ == "__main__":
    main()