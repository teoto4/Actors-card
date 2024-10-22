//initial
const actor_cards = document.querySelector('#actor_cards');
console.log(actor_cards);


function createCard(){
    for(i = 0; i < actors.length; i++){
        //create_element
        const card = document.createElement('li');
        const img = document.createElement('img');
        const name = document.createElement('p');
        const social = document.createElement('ul');
        const social_a = document.createElement('a');
        const  social_a_img = document.createElement('img')
        //get_content
        img.setAttribute("src", actors[i].profilePicture);
        name.textContent = actors[i].firstName + ' ' + actors[i].lastName;

        social.classList.add('social_icon')
        social_a.setAttribute("href", actors[i].inst); 
        social_a_img.setAttribute('src', actor_cards.inst_icon)
        //append
        actor_cards.append(card);
        card.append(img, name, social);
        social.append(social_a);
        social_a.append(social_a_img);
        
    }
 
 console.dir(actor_cards);
 
}

createCard()