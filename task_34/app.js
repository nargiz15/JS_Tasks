// Normalda Bazar ertesinden Cumeye qeder ders olur. Ele bir funksiya qurun ki,
//  bize alert-le desin bu gun derse getmeliyik ya yox.

const date = new Date()
switch (date.getDay()) {
    case 1: console.log("derse get");
           break;
    case 2: console.log("derse get");
          break;
    case 3:console.log("derse get");
          break;
    case 4:console.log("derse get");
         break;
    case 5:
        console.log("derse get");
        break;
    case 6: console.log("derse getme");
        break;
    case 0:
        console.log("derse getme");
        break;
    default:
        console.log("error")
}



