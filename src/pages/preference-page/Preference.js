import React, { useState } from 'react';
import './_preference.scss';

const data = [
  {
    id: 0,
    header: 'header1',
    item: [
      {
        decs: 'our data privacy & security are important to us. To understand how we collect and use your personal data when delivering But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure',
      },
    ],
  },
  {
    id: 1,
    header: 'header2',
    item: [
      {
        decs: 'We value the personal data entrusted to us and are committed to processing your personal data in harmony with the data protection laws and On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains regulations to which Accel is subject, including the EU General Data Protection Regulation and the California Consumer Privacy Act',
      },
    ],
  },
  {
    id: 2,
    header: 'header3',
    item: [
      {
        decs: 'We use your name  and t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella contact details, such as email, postal address and contact number to continue communications with you. We may also use your contact information to invite you to events we are hosting or to keep you updated with our news.',
      },
    ],
  },
];

const Preference = () => {
  const [Select, setSelect] = useState(1);

  const handleSelect = (item) => {
    setSelect(item);
  };
  console.log(Select);
  console.log(data[0], 'item');
  return (
    <div className=''>
      <div className='preference'>
        <div className='preference-div1'>
          {data.map((item) => (
            <h2
              className='preference-div1-h'
              onClick={() => handleSelect(item.id)}
            >
              {item.header}
            </h2>
          ))}
        </div>
        <div className='preference-div2'>
          {data[Select]?.item?.map((p) => (
            <p>{p.decs}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preference;
