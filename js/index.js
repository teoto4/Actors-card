//initial
const actor_cards = document.querySelector('#actor_cards');
console.log(actor_cards);
const choosed_list = document.querySelector('#choosed_list')

let set_list = new Set();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function create_list() {
    console.log("work");
    console.log(set_list.size);

    choosed_list.innerHTML = '';

    set_list.forEach((actor) => {
        console.log('create');
        const li_choose = document.createElement('li');
        li_choose.textContent = actor.firstName + ' ' + actor.lastName;
        choosed_list.append(li_choose);

        li_choose.addEventListener('click', ()=>{
            console.log('clicked');
            set_list.delete(actor);
            create_list();
        })
    });
}

function createCard(){
    for(i = 0; i < actors.length; i++){
        //create_element
        if(!actors[i].firstName){
            continue;
        }

        const card = document.createElement('li');
        const img = document.createElement('img');
        const name = document.createElement('p');
        const social = document.createElement('ul');

        actors[i].contacts.forEach(contact => {
            const social_a = document.createElement('a');
            const social_a_img = document.createElement('img');
            social_a.setAttribute("href", contact); 
            social_a_img.setAttribute('src', './img/faceboock.png');
            social_a.append(social_a_img);
            social.append(social_a);
        });

        const name_lastName = actors[i].firstName + ' ' + actors[i].lastName;
        card.setAttribute('id', `card#${i}`)
        //get_content
        img.setAttribute("src", actors[i].profilePicture);
        name.textContent = name_lastName;
        social.classList.add('social_icon');

        img.addEventListener('error', ()=>{
            const initial = name_lastName.split(' ')
            img.style.display = 'none';
            const initial_block = document.createElement('div');
            initial_block.classList.add('initial_block');
            initial_block.style.backgroundColor = getRandomColor();
            initial_block.innerText = initial[0][0] + initial[1][0];
            card.prepend(initial_block);
        })

        //append
        actor_cards.append(card);
        card.append(img, name, social);
 
        card.addEventListener('click', ()=>{
            const card_id = card.getAttribute('id');
            set_list.add(actors[card_id[card_id.length - 1]]);
            console.log(set_list);
            create_list();
        })
    }
}

create_list();
createCard()