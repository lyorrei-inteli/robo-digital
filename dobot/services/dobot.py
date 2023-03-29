import pydobot
from serial.tools import list_ports

class Dobot:
    def start_connection(self) -> bool:
        available_ports = list_ports.comports()
        for port in available_ports:
            try:
                device = pydobot.Dobot(port=port.device, verbose=False)
                self.device = device
                print("Robô conectado!")
                return True
            except:
                print(
                    f"Wrong port: {port.device}, trying another one...")
                continue
        return False

    def end_connection(self) -> bool:
        try:
            self.device.close()
            return True
        except:
            print("Device unable to desconnected!")
            return False

