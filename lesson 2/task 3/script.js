let login = prompt("Введіть логін");

switch (login) {
  case "Admin": {
    let pass = prompt("Password?");

    switch (pass) {
      case "TheMaster": {
        alert("Come in");
        break;
      }
      case "cancel": {
        alert("Canceled");
        break;
      }
      default:
        {
          aler("Wrong password");
          break;
        }
        break;
    }
  }
  case "cancel": {
    alert("Canceled");
    break;
  }
  default: {
    alert("Wrong password");
    break;
  }
}
