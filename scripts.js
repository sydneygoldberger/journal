let entry = document.getElementById("entry");
let entryTitle = document.getElementById("entryTitle");
let entryDate = document.getElementById("entryDate");
let entryText = document.getElementById("entryDate");
let journalContainer = document.getElementById("journalContainer");
let entry1 = document.getElementById("entry1");
let entry2 = document.getElementById("entry2");
let entry3 = document.getElementById("entry3");
let entry4 = document.getElementById("entry4");
let entry5 = document.getElementById("entry5");
let entry6 = document.getElementById("entry6");
let entry7 = document.getElementById("entry7");
let entry8 = document.getElementById("entry8");
let entry9 = document.getElementById("entry9");
let entry10 = document.getElementById("entry10");
let entry11 = document.getElementById("entry11");
let entry12 = document.getElementById("entry12");
let entry13 = document.getElementById("entry13");
let entry14 = document.getElementById("entry14");


let rainbowFollow = document.getElementById("rainbowFollow");
let headerContainer = document.getElementById("headerContainer");
let descriptionContainer = document.getElementById("descriptionContainer");
let thermalVision = document.getElementById("thermalVision");
let nightVision = document.getElementById("nightVision");
let resetButton = document.getElementById("resetButton");
let x = document.getElementById("X");
let theBody = document.getElementsByTagName("body")[0];

theBody.onmouseover = function(e){
    x.style.top = e.clientY + "px";
    x.style.left = e.clientX + "px";
    x.style.zIndex = "-1"
}

entry1.onmouseover = function(){
    entry1.style.backgroundColor = "#0094e5";
}
entry1.onmouseleave = function(){
    entry1.style.backgroundColor = "#ddcba8";
}
entry2.onmouseover = function(){
    entry2.style.backgroundColor = "#0062ff";
}
entry2.onmouseleave = function(){
    entry2.style.backgroundColor = "#ddcba8";
}
entry3.onmouseover = function(){
    entry3.style.backgroundColor = "#2800db";
}
entry3.onmouseleave = function(){
    entry3.style.backgroundColor = "#ddcba8";
}
entry4.onmouseover = function(){
    entry4.style.backgroundColor = "#2fc0d6";
}
entry4.onmouseleave = function(){
    entry4.style.backgroundColor = "#ddcba8";
}
entry5.onmouseover = function(){
    entry5.style.backgroundColor = "#4d4dff";
}
entry5.onmouseleave = function(){
    entry5.style.backgroundColor = "#ddcba8";
}
entry6.onmouseover = function(){
    entry6.style.backgroundColor = "#62B7E5";
}
entry6.onmouseleave = function(){
    entry6.style.backgroundColor = "#ddcba8";
}
entry7.onmouseover = function(){
    entry7.style.backgroundColor = "#99ccff";
}
entry7.onmouseleave = function(){
    entry7.style.backgroundColor = "#ddcba8";
}
entry8.onmouseover = function(){
    entry8.style.backgroundColor = "#048ed9";
}
entry8.onmouseleave = function(){
    entry8.style.backgroundColor = "#ddcba8";
}
entry9.onmouseover = function(){
    entry9.style.backgroundColor = "#5b80f0";
}
entry9.onmouseleave = function(){
    entry9.style.backgroundColor = "#ddcba8";
}
entry10.onmouseover = function(){
    entry10.style.backgroundColor = "#09047d";
}
entry10.onmouseleave = function(){
    entry10.style.backgroundColor = "#ddcba8";
}
entry11.onmouseover = function(){
    entry11.style.backgroundColor = "#68add9";
}
entry11.onmouseleave = function(){
    entry11.style.backgroundColor = "#ddcba8";
}
entry12.onmouseover = function(){
    entry12.style.backgroundColor = "#dcebf5";
}
entry12.onmouseleave = function(){
    entry12.style.backgroundColor = "#ddcba8";
}
entry13.onmouseover = function(){
    entry13.style.backgroundColor = "#1594e8";
}
entry13.onmouseleave = function(){
    entry13.style.backgroundColor = "#ddcba8";
}
entry14.onmouseover = function(){
    entry14.style.backgroundColor = "#1b257d";
}
entry14.onmouseleave = function(){
    entry14.style.backgroundColor = "#ddcba8";
}


nightVision.onclick = function(){
    nightVision.style.color = "black";
    nightVision.style.backgroundColor = "white";
    nightVision.style.borderColor = "white";
    resetButton.style.color = "white";
    resetButton.style.backgroundColor = "black";
    resetButton.style.borderColor = "white";
    thermalVision.style.color = "white";
    thermalVision.style.borderColor = "white";
    thermalVision.style.backgroundColor = "black";
    document.body.style.color = "black";
    document.body.style.backgroundColor = "black";
    entry1.style.backgroundColor = "black";
    entry2.style.backgroundColor = "black";
    entry3.style.backgroundColor = "black";
    entry4.style.backgroundColor = "black";
    entry5.style.backgroundColor = "black";
    entry6.style.backgroundColor = "black";
    entry7.style.backgroundColor = "black";
    entry8.style.backgroundColor = "black";
    entry9.style.backgroundColor = "black";
    entry10.style.backgroundColor = "black";
    entry11.style.backgroundColor = "black";
    entry12.style.backgroundColor = "black";
    entry13.style.backgroundColor = "black";
    entry14.style.backgroundColor = "black";

    entry1.onmouseover = function(){
        entry1.style.backgroundColor = "#27b300";
    }
    entry1.onmouseleave = function(){
        entry1.style.backgroundColor = "black";
    }
    entry2.onmouseover = function(){
        entry2.style.backgroundColor = "#27b300";
    }
    entry2.onmouseleave = function(){
        entry2.style.backgroundColor = "black";
    }
    entry3.onmouseover = function(){
        entry3.style.backgroundColor = "#27b300";
    }
    entry3.onmouseleave = function(){
        entry3.style.backgroundColor = "black";
    }
    entry4.onmouseover = function(){
        entry4.style.backgroundColor = "#27b300";
    }
    entry4.onmouseleave = function(){
        entry4.style.backgroundColor = "black";
    }
    entry5.onmouseover = function(){
        entry5.style.backgroundColor = "#27b300";
    }
    entry5.onmouseleave = function(){
        entry5.style.backgroundColor = "black";
    }
    entry6.onmouseover = function(){
        entry6.style.backgroundColor = "#27b300";
    }
    entry6.onmouseleave = function(){
        entry6.style.backgroundColor = "black";
    }
    entry7.onmouseover = function(){
        entry7.style.backgroundColor = "#27b300";
    }
    entry7.onmouseleave = function(){
        entry7.style.backgroundColor = "black";
    }
    entry8.onmouseover = function(){
        entry8.style.backgroundColor = "#27b300";
    }
    entry8.onmouseleave = function(){
        entry8.style.backgroundColor = "black";
    }
    entry9.onmouseover = function(){
        entry9.style.backgroundColor = "#27b300";
    }
    entry9.onmouseleave = function(){
        entry9.style.backgroundColor = "black";
    }
    entry10.onmouseover = function(){
        entry10.style.backgroundColor = "#27b300";
    }
    entry10.onmouseleave = function(){
        entry10.style.backgroundColor = "black";
    }
    entry11.onmouseover = function(){
        entry11.style.backgroundColor = "#27b300";
    }
    entry11.onmouseleave = function(){
        entry11.style.backgroundColor = "black";
    }
    entry12.onmouseover = function(){
        entry12.style.backgroundColor = "#27b300";
    }
    entry12.onmouseleave = function(){
        entry12.style.backgroundColor = "black";
    }
    entry13.onmouseover = function(){
        entry13.style.backgroundColor = "#27b300";
    }
    entry13.onmouseleave = function(){
        entry13.style.backgroundColor = "black";
    }
    entry14.onmouseover = function(){
        entry14.style.backgroundColor = "#27b300";
    }
    entry14.onmouseleave = function(){
        entry14.style.backgroundColor = "black";
    }

    x.style.width = "150px";
    x.style.height = "150px";
    x.style.background = "#27b300"
}

resetButton.onclick = function(){
    resetButton.style.color = "black";
    resetButton.style.borderColor = "white";
    resetButton.style.backgroundColor = "white";
    nightVision.style.color = "white";
    nightVision.style.borderColor = "white";
    nightVision.style.backgroundColor = "#ddcba8";
    thermalVision.style.color = "white";
    thermalVision.style.borderColor = "white";
    thermalVision.style.backgroundColor = "#ddcba8";

    entry1.style.backgroundColor = "#ddcba8";
    entry2.style.backgroundColor = "#ddcba8";
    entry3.style.backgroundColor = "#ddcba8";
    entry4.style.backgroundColor = "#ddcba8";
    entry5.style.backgroundColor = "#ddcba8";
    entry6.style.backgroundColor = "#ddcba8";
    entry7.style.backgroundColor = "#ddcba8";
    entry8.style.backgroundColor = "#ddcba8";
    entry9.style.backgroundColor = "#ddcba8";
    entry10.style.backgroundColor = "#ddcba8";
    entry11.style.backgroundColor = "#ddcba8";
    entry12.style.backgroundColor = "#ddcba8";
    entry13.style.backgroundColor = "#ddcba8";
    entry14.style.backgroundColor = "#ddcba8";

    document.body.style.backgroundColor = "#ddcba8";

    entry1.onmouseover = function(){
        entry1.style.backgroundColor = "#0094e5";
    }
    entry1.onmouseleave = function(){
        entry1.style.backgroundColor = "#ddcba8";
    }
    entry2.onmouseover = function(){
        entry2.style.backgroundColor = "#0062ff";
    }
    entry2.onmouseleave = function(){
        entry2.style.backgroundColor = "#ddcba8";
    }
    entry3.onmouseover = function(){
        entry3.style.backgroundColor = "#2800db";
    }
    entry3.onmouseleave = function(){
        entry3.style.backgroundColor = "#ddcba8";
    }
    entry4.onmouseover = function(){
        entry4.style.backgroundColor = "#2fc0d6";
    }
    entry4.onmouseleave = function(){
        entry4.style.backgroundColor = "#ddcba8";
    }
    entry5.onmouseover = function(){
        entry5.style.backgroundColor = "#4d4dff";
    }
    entry5.onmouseleave = function(){
        entry5.style.backgroundColor = "#ddcba8";
    }
    entry6.onmouseover = function(){
        entry6.style.backgroundColor = "#62B7E5";
    }
    entry6.onmouseleave = function(){
        entry6.style.backgroundColor = "#ddcba8";
    }
    entry7.onmouseover = function(){
        entry7.style.backgroundColor = "#99ccff";
    }
    entry7.onmouseleave = function(){
        entry7.style.backgroundColor = "#ddcba8";
    }
    entry8.onmouseover = function(){
        entry8.style.backgroundColor = "#048ed9";
    }
    entry8.onmouseleave = function(){
        entry8.style.backgroundColor = "#ddcba8";
    }
    entry9.onmouseover = function(){
        entry9.style.backgroundColor = "#5b80f0";
    }
    entry9.onmouseleave = function(){
        entry9.style.backgroundColor = "#ddcba8";
    }
    entry10.onmouseover = function(){
        entry10.style.backgroundColor = "#09047d";
    }
    entry10.onmouseleave = function(){
        entry10.style.backgroundColor = "#ddcba8";
    }
    entry11.onmouseover = function(){
        entry11.style.backgroundColor = "#68add9";
    }
    entry11.onmouseleave = function(){
        entry11.style.backgroundColor = "#ddcba8";
    }
    entry12.onmouseover = function(){
        entry12.style.backgroundColor = "#dcebf5";
    }
    entry12.onmouseleave = function(){
        entry12.style.backgroundColor = "#ddcba8";
    }
    entry13.onmouseover = function(){
        entry13.style.backgroundColor = "#1594e8";
    }
    entry13.onmouseleave = function(){
        entry13.style.backgroundColor = "#ddcba8";
    }
    entry14.onmouseover = function(){
        entry14.style.backgroundColor = "#1b257d";
    }
    entry14.onmouseleave = function(){
        entry14.style.backgroundColor = "#ddcba8";
    }
  
    x.style.width = "150px";
    x.style.height = "150px";
    x.style.background = "#2f3ad6"
}

thermalVision.onclick = function(){
    thermalVision.style.color = "black";
    thermalVision.style.borderColor = "white";
    thermalVision.style.backgroundColor = "white";
    thermalVision.style.color = "black";
    nightVision.style.color = "white";
    nightVision.style.borderColor = "white";
    nightVision.style.backgroundColor = "#130082";
    resetButton.style.backgroundColor = "#130082";
    resetButton.style.color = "white";
    resetButton.style.borderColor = "white";

    entry1.style.backgroundColor = "#05006b";
    entry2.style.backgroundColor = "#05006b";
    entry3.style.backgroundColor = "#05006b";
    entry4.style.backgroundColor = "#05006b";
    entry5.style.backgroundColor = "#05006b";
    entry6.style.backgroundColor = "#05006b";
    entry7.style.backgroundColor = "#05006b";
    entry8.style.backgroundColor = "#05006b";
    entry9.style.backgroundColor = "#05006b";
    entry10.style.backgroundColor = "#05006b";
    entry11.style.backgroundColor = "#05006b";
    entry12.style.backgroundColor = "#05006b";
    entry13.style.backgroundColor = "#05006b";
    entry14.style.backgroundColor = "#05006b";

    document.body.style.backgroundColor = "#05006b";

    entry1.onmouseover = function(){
        entry1.style.backgroundColor = "#00b822";
    }
    entry1.onmouseleave = function(){
        entry1.style.backgroundColor = "#130082";
    }
    entry2.onmouseover = function(){
        entry2.style.backgroundColor = "#d41b81";
    }
    entry2.onmouseleave = function(){
        entry2.style.backgroundColor = "#130082";
    }
    entry3.onmouseover = function(){
        entry3.style.backgroundColor = "#ff8400";
    }
    entry3.onmouseleave = function(){
        entry3.style.backgroundColor = "#130082";
    }
    entry4.onmouseover = function(){
        entry4.style.backgroundColor = "#f4270c";
    }
    entry4.onmouseleave = function(){
        entry4.style.backgroundColor = "#130082";
    }
    entry5.onmouseover = function(){
        entry5.style.backgroundColor = "#00b822";
    }
    entry5.onmouseleave = function(){
        entry5.style.backgroundColor = "#130082";
    }
    entry6.onmouseover = function(){
        entry6.style.backgroundColor = "#d41b81";
    }
    entry6.onmouseleave = function(){
        entry6.style.backgroundColor = "#130082";
    }
    entry7.onmouseover = function(){
        entry7.style.backgroundColor = "#ff8400";
    }
    entry7.onmouseleave = function(){
        entry7.style.backgroundColor = "#130082";
    }
    entry8.onmouseover = function(){
        entry8.style.backgroundColor = "#f4270c";
    }
    entry8.onmouseleave = function(){
        entry8.style.backgroundColor = "#130082";
    }
    entry9.onmouseover = function(){
        entry9.style.backgroundColor = "#00b822";
    }
    entry9.onmouseleave = function(){
        entry9.style.backgroundColor = "#130082";
    }
    entry10.onmouseover = function(){
        entry10.style.backgroundColor = "#d41b81";
    }
    entry10.onmouseleave = function(){
        entry10.style.backgroundColor = "#130082";
    }
    entry11.onmouseover = function(){
        entry11.style.backgroundColor = "#ff8400";
    }
    entry11.onmouseleave = function(){
        entry11.style.backgroundColor = "#130082";
    }
    entry12.onmouseover = function(){
        entry12.style.backgroundColor = "#f4270c";
    }
    entry12.onmouseleave = function(){
        entry12.style.backgroundColor = "#130082";
    }
    entry13.onmouseover = function(){
        entry13.style.backgroundColor = "#00b822";
    }
    entry13.onmouseleave = function(){
        entry13.style.backgroundColor = "#130082";
    }
    entry14.onmouseover = function(){
        entry14.style.backgroundColor = "#d41b81";
    }
    entry14.onmouseleave = function(){
        entry14.style.backgroundColor = "#130082";
    }

    x.style.width = "150px";
    x.style.height = "150px";
    x.style.background = "#ffff00"
}
