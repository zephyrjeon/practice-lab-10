// Initial contacts data
const rootElem = document.getElementById('root');
const listElem = document.getElementById('list');
const addElem = document.getElementById('add');
const updateElem = document.getElementById('update');
const searchElem = document.getElementById('search');

let contacts = [
  {
    name: 'Maxwell Wright',
    phone: '019171916495',
    email: 'contact1@cctb.com',
  },

  {
    name: 'Raja Villarreal',
    phone: '0863982895',
    email: 'contact2@cctb.com',
  },
  {
    name: 'Helen Richards',
    phone: '080031111',
    email: 'contact3@cctb.edu',
  },
];

const appendContact = ({ name, phone, email }) => {
  const li = list.appendChild(document.createElement('li'));
  li.classList.add('list-group-item');
  li.textContent = `${name} / ${phone} / ${email}`;
};

window.setTimeout(() => {
  contacts.forEach((contact) => appendContact(contact));
}, 3000);

window.setInterval(() => {
  console.log(`Contact count: ${contacts.length}`);
}, 5000);

window.setInterval(() => {
  const rgb = () => Math.round(Math.random() * 255);

  rootElem.style.setProperty(
    'background',
    `rgb(${rgb()} ${rgb()} ${rgb()} / 50%)`
  );
}, 5000);

addElem.addEventListener('click', () => {
  do {
    const nameInput = window.prompt('Type name');
    if (!nameInput) break;
    const phoneInput = window.prompt('Type phone');
    if (!phoneInput) break;
    const emailInput = window.prompt('Type email');
    if (!emailInput) break;

    const newContact = {
      name: nameInput,
      phone: phoneInput,
      email: emailInput,
    };

    contacts.push(newContact);
  } while (true);
});

updateElem.addEventListener('click', () => {
  list.replaceChildren();
  contacts.forEach((contact) => appendContact(contact));
});

searchElem.addEventListener('click', () => {
  do {
    const input = window.prompt('Search for contacts by name');

    if (!input) break;

    const result = [];

    contacts.filter((contact) => {
      contact.name.includes(input) && result.push(contact);
    });

    console.log(`Search Result: ${JSON.stringify(result)}`);
  } while (true);
});
