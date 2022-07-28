const os = require("os");

const repeatTimeSeconds = 0.1;
const repeatTime = repeatTimeSeconds * 1000;

const toFixesParameter = 3;

function byteToGB(mem) {
  return mem / 1024 / 1024 / 1024;
}

function ramStatus() {
  const totalMem = byteToGB(os.totalmem()).toFixed(toFixesParameter);
  const freeMem = byteToGB(os.freemem()).toFixed(toFixesParameter);
  const usingMem = (totalMem - freeMem).toFixed(toFixesParameter);

  console.log(
    "========================================================================"
  );
  console.log(
    `Total RAM: ${totalMem} GB\nUsed RAM: ${usingMem} GB\nFree RAM: ${freeMem} GB`
  );
  console.log(
    "========================================================================"
  );
}

function osInfo() {
  const hostName = os.hostname();
  const operationSystem = os.platform();
  const osArch = os.arch();
  const version = os.release();
  const upTime = (os.uptime() / 60 / 60).toFixed(toFixesParameter);

  console.log(
    `Hostname: ${hostName}\nOperation System: ${operationSystem}\nOperation System Arch: ${osArch}\nResealse Version: ${version}\nSystem Uptime: ${upTime} Hours`
  );
  console.log(
    "========================================================================"
  );
}

function directory() {
  const homeDirectory = os.homedir();
  const tempDirectory = os.tmpdir();

  console.log(
    `Home Directory: ${homeDirectory}\nTemporary Directory: ${tempDirectory}`
  );
  console.log(
    "========================================================================"
  );
}

function cpuInfo() {
  const cpuThreads = os.cpus().length;
  const cpuModel = os.cpus()[0].model;

  console.log(`CPU Model: ${cpuModel}\nCPU Threads: ${cpuThreads}`);
  console.log(
    "========================================================================"
  );
}

function pcInfoShow() {
  ramStatus();
  osInfo();
  directory();
  cpuInfo();

  setTimeout(function screenClr() {
    console.clear();
  }, repeatTime);
}

setInterval(pcInfoShow, repeatTime);
