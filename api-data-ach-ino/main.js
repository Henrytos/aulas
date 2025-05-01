const serialPort = require("serialport")

async function listPorts() {
    serialPort.SerialPortMock.cre
    const ports = await serialPort.SerialPort.list()
    console.table(ports)
}

listPorts()