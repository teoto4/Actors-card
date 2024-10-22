//initial
const actor_cards = document.querySelector('#actor_cards');
console.log(actor_cards);

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
        const social_a = document.createElement('a');
        const  social_a_img = document.createElement('img');
        const name_lastName = actors[i].firstName + ' ' + actors[i].lastName;
        card.setAttribute('id', `card#${i}`)
        //get_content
        img.setAttribute("src", actors[i].profilePicture);
        name.textContent = name_lastName;

        social.classList.add('social_icon')
        social_a.setAttribute("href", actors[i].inst); 
        social_a_img.setAttribute('src', actor_cards.inst_icon)
        //append
        actor_cards.append(card);
        card.append(img, name, social);
        social.append(social_a);
        social_a.append(social_a_img);
 
        card.addEventListener('click', ()=>{
            const card_id = i;
            set_list.add(actors[card_id]);
            console.log(set_list);
            create_list();
        })
    }
}

create_list();
createCard()