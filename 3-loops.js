var i;

for(i = 0;i < 10;i++) {
    console.log(i);
}

var j;

for(i = 0;i < 10;i++) {
    for(j = 10;j > 0;j--) {
        console.log(i, j);
    }
}

i = 0;

while(i < 50) {
    i += 5;
    console.log(i);
}

i = 10;

do {
    i--;
    console.log(i);
}
while(i == 10);
