Single-project, single-page crowdfunding app using AngularJS logic, Foundation style, and FirebaseIO data. 

There is no back-end, except for FirebaseIO database and security service. 
This is a very alpha version with lot's of refactoring to do still but it comes with:

<ul>
  <li> contentEditable admin interface</li>
  <li> the story</li>
  <li> perks - title, cost, paypal integration sans IPN</li>
  <li> supplier, item, and budget list</li>
  <li> team members - name, title, position, img url</li>
  <li> automated progress meter</li>
  <li> share links</li>
</ul>

The plan is to create a complete one-page site, but I made it this way to prevent accidental edits. 
Will try to not rely on modal windows and dropdowns but instead build 
Angular directives to attach as attributes where appro for CRUD.

Thanks to ThinksterIO for their awesome tutorials. Thank you AngularJS devs and community for double-binding and loops. 
Thanks FirebaseIO, for being a simple database.
