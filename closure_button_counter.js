let closure_count = () => {

    let view = document.getElementById("view");
    let counter = 0;
    
    return function() {
        counter++;
        view.innerHTML = counter;
    }
}

// must assign the outer function to a variable 
let start_counter = closure_count();