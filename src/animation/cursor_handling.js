export class Cursor{
    
    constructor (){}

     hover() {
        let cursor = document.getElementById('cursor')
        cursor.style.zIndex = 4
        cursor.style.opacity = 0
    }
    
     leave(){
        let cursor = document.getElementById('cursor')
        cursor.style.zIndex = 99
        cursor.style.opacity = 1

    }
}

