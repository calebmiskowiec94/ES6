class bed {
    constructor(bedTemp, tooCold) {
        this.bedTemp = bedTemp; // current temp of bed
        //this.color = color; // Color of the bed
        this.tooCold = 60; // max cold temp for bed...60
    }


    cover(bedTemp) {
        if (this.bedTemp <= this.tooCold) {
            this.bedTemp = this.bedTemp + 40;
            console.log(this.bedTemp);
            console.log('much better');
        } else {
            console.log('bed is already warm!');
        }
    }
}

let customBed = new bed(65, this.tooCold);
let unKnownBed= new bed(undefined,this.Cold);

;
customBed.cover();//test for already knowing temp and doing second option of cover

unKnownBed.cover(10);//test for when getting in the bed with result being to use 1st option of cover


