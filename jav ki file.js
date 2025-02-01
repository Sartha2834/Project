const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementlist = document.querySelectorAll(".requirement-list li");

const requirement = [
    {regex: /. {8,}/, index: 0},
    {regex: /. {0-9}/, index: 1},
    {regex: /. {a-z}/, index: 2},
    {regex: /. {^A-Za-z0-9}/, index: 3},
    {regex: /. {A-Z}/, index: 4},
]

passwordInput.addEventListener("keyup", (e) => {
    requirement.forEach(item => {
        const isvalid = item.regex.test(e.target.value);
        const requirementItem = requirementlist[item.index];

        if(isvalid){
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.firstElementChild.className = "fa-solida fa-circle";
        }
    });

});
eyeIcon.addEventListener("click",() => {
    passwordInput.type=passwordInput.type === "password"?"text":"passsword";
    eyeIcon.className='fa-solid fa-eye $ {passwordInput.type === "password"?"":"-slash"}';

});