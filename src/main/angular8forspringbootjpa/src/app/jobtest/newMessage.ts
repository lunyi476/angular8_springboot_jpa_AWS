function newMessage(topicName) {
    // Write your code here
    let m = document.querySelectorAll('p[data-topic-name='+topicName+']') as NodeListOf<HTMLParagraphElement>;
    for (let i=0; i < m.length; i++) {
      m[i].style.backgroundColor= 'red';
    }
  }
  
  // Example case
  document.body.innerHTML = `<div>
    <p data-topic-name="discussion">General discussion</p>
    <p data-topic-name="bugs">Bugs</p>
    <p data-topic-name="animals">Animals</p>
  </div>`;
  newMessage("discussion");
  console.log(document.body.innerHTML);