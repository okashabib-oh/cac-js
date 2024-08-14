const guns = "m416"

switch (guns) {
    case "UMP9":
        console.log("SMG rollin");
        break; // break is mandatory otherwise all cases will run where break isn't putted
    case "m416":
        console.log("Assault Rifle rollin")
        break;
    case "P19":
        console.log("Pistol rollin");
        break;
    case "AS50":
        console.log("Sniper rollin")
        break;

    default:
        console.log("Alive on luck :)")
        break;
}