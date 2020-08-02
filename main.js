array1=[]
a="#mem";
slc="#mem1";
counter=1;
while(document.querySelector(slc)!=null){
    array1.push(document.querySelector(slc).offsetWidth);
    counter++;
    slc=a+counter;
}
width=Math.max(...array1)

slc="#mem1";
counter=1;

while(document.querySelector(slc)!=null){
    document.querySelector(slc).style.minWidth=width;
    counter++;
    slc=a+counter;
}
