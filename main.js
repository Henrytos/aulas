const serialPort = require("serialport")

async function listPorts() {
    serialPort.SerialPortMock.cre
    const ports = await serialPort.SerialPortMock.list()
    console.table(ports)
}

listPorts()