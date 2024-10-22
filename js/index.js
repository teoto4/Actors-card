//initial
const actor_cards = document.querySelector('#actor_cards');
console.log(actor_cards);
const choosed_list = document.querySelector('#choosed_list')

let set_list = new Set();

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
            social_a_img.setAttribute('src', 'URL_Иконки');
            social_a.append(social_a_img);
            social.append(social_a);
        });

        const name_lastName = actors[i].firstName + ' ' + actors[i].lastName;
        card.setAttribute('id', `card#${i}`)
        //get_content
        img.setAttribute("src", actors[i].profilePicture);
        name.textContent = name_lastName;
        social.classList.add('social_icon');
        
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