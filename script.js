document.addEventListener('DOMContentLoaded', (event) => {
    loadContacts();
});

function loadContacts() {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    let contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>Name: ${contact.name}</span>
            <span>Phone: ${contact.phone}</span>
            <span>Email: ${contact.email}</span>
            <button onclick="deleteContact(${index})">Delete</button>
            <button onclick="editContact(${index})">Edit</button>
        `;
        contactList.appendChild(li);
    });
}

function addContact() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    if (name && phone && email) {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push({ name, phone, email });
        localStorage.setItem('contacts', JSON.stringify(contacts));
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        loadContacts();
        alert('Contact added successfully!');
    } else {
        alert('Please fill out all fields.');
    }
}

function deleteContact(index) {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    loadContacts();
    alert('Contact deleted successfully!');
}

function editContact(index) {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    let contact = contacts[index];
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    loadContacts();
}

function toggleContactList() {
    let contactsDiv = document.getElementById('contacts');
    if (contactsDiv.style.display === 'none') {
        contactsDiv.style.display = 'block';
        loadContacts();
    } else {
        contactsDiv.style.display = 'none';
    }
}
