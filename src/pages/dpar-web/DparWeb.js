import React, { useState } from 'react';
import './_dpar-web.scss';
import {
  Button,
  ComboBox,
  Dropdown,
  TextInput,
  FileUploaderDropContainer,
} from '@carbon/react';

const header = [
  {
    id: 0,
    langName: 'English',
    langCode: 'EN',
    data: [
      {
        heading1: 'Welcome to OneTrust Privacy Webform!',
        heading2: 'Thank you.',
        heading3: 'Choose Entity',
        heading4: 'I am a (an)',
        heading5: 'Country',
        heading6: 'First Name',
        heading7: 'Last Name',
        heading8: 'Your Email / Agent Email',
        heading9: 'Request Details',
        heading10: 'Please Note',
        heading11:
          'Please confirm your understanding of the above before submitting your request',
        heading12: 'Drag and drop files here or click to upload',
        heading13: 'Submit',
        role1: ' Platform User',
        role2: ' Employee',
        role3: ' Job Applicant',
        role4: ' Marketing Recipient',
        role5: ' Authorize Agent',
        desc1:
          'You can use this form to submit a request regarding your personal information that is processed by OneTrust and its subsidiaries and affiliates (Convercent by OneTrust, OneTrust DataGuidance, Planetly by OneTrust, PrivacyConnect, Redacted.ai, and Tugboat Logic by OneTrust). Please complete this form and we will respond as soon as possible.',
        desc2:
          'Please select from the list below the entity with which you have a relationship. For example, if you are an Employee or Job Applicant, please select the entity where you work/worked or submitted your application. If you are a Marketing Recipient, please select the entity that contacted you.',
        desc3:
          'OneTrust and its subsidiaries and affiliates can only action requests from individuals with a direct relationship to OneTrust or its subsidiaries and affiliates. This includes requests from our customers, job applicants, employees or marketing recipients.',
        desc4:
          'As we are B2B Privacy Software providers (data processors), we cannot respond to any requests on behalf of companies that use our software for their own privacy programs. For such requests, we recommend that you reach out to such companies directly.',
        desc5:
          'If you are looking to make a request to a company that uses OneTrust to manage their privacy, security, or third party risk programs, please directly do so on their website',
        desc6:
          'eTrust LLC - 1200 Abernathy Rd NE, Atlanta, GA 30328, U.S.A. OneTrust Technology Limited - 82 St John St, Farringdon, London, EC 1M 4JN, U.K. Contact us at dpo@onetrust.com Privacy Notice',
        countries: [
          {
            id: 'option-0',
            text: 'India',
          },
          {
            id: 'option-1',
            text: 'America',
          },
          {
            id: 'option-2',
            text: 'China',
          },
          {
            id: 'option-3',
            text: 'Russia',
          },
        ],
        confirm: [
          {
            id: 'option-0',
            text: 'I understand',
          },
        ],
        entities: [
          {
            id: 'option-0',
            text: 'OneTrust',
          },
          {
            id: 'option-1',
            text: 'Convercent by OneTrust',
          },
          {
            id: 'option-2',
            text: 'Planetly by OneTrust',
          },
          {
            id: 'option-3',
            text: 'Tugboat Logic by OneTrust',
          },
          {
            id: 'option-4',
            text: 'DataGuidance',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    langName: 'हिन्दी',
    langCode: 'HI',
    data: [
      {
        heading1: 'वनट्रस्ट गोपनीयता वेबफॉर्म में आपका स्वागत है!',
        heading2: 'धन्यवाद।',
        heading3: 'इकाई चुनें',
        heading4: 'मैं हूं',
        heading5: 'देश',
        heading6: 'पहला नाम',
        heading7: 'उपनाम',
        heading8: 'आपका ईमेल/एजेंट ईमेल',
        heading9: 'अनुरोध विवरण',
        heading10: 'कृपया इस बात पर ध्यान दें',
        heading11:
          'कृपया अपना अनुरोध सबमिट करने से पहले उपरोक्त के बारे में अपनी समझ की पुष्टि करें',
        heading12:
          'फ़ाइलों को यहां खींचें और छोड़ें या अपलोड करने के लिए क्लिक करें',
        heading13: 'जमा ',

        role1: ' प्लेटफ़ॉर्म उपयोगकर्ता',
        role2: ' कर्मचारी',
        role3: ' नौकरी आवेदक',
        role4: ' विपणन प्राप्तकर्ता',
        role5: ' एजेंट को अधिकृत करें',
        desc1:
          'आप इस फॉर्म का उपयोग अपनी व्यक्तिगत जानकारी के संबंध में अनुरोध सबमिट करने के लिए कर सकते हैं जिसे वनट्रस्ट और उसकी सहायक कंपनियों और सहयोगियों (वनट्रस्ट द्वारा कन्वर्सेंट, वनट्रस्ट डेटागाइडेंस, वनट्रस्ट द्वारा प्लैनेटली, प्राइवेसीकनेक्ट, रेडैक्टेड.एआई, और वनट्रस्ट द्वारा टगबोट लॉजिक) द्वारा संसाधित किया जाता है। कृपया इस फॉर्म को पूरा करें और हम यथाशीघ्र जवाब देंगे।',
        desc2:
          'कृपया नीचे दी गई सूची में से उस इकाई का चयन करें जिसके साथ आपका संबंध है। उदाहरण के लिए, यदि आप एक कर्मचारी या नौकरी आवेदक हैं, तो कृपया उस इकाई का चयन करें जहां आप काम करते हैं/कार्य करते हैं या अपना आवेदन जमा किया है। यदि आप मार्केटिंग प्राप्तकर्ता हैं, तो कृपया उस इकाई का चयन करें जिसने आपसे संपर्क किया था।',
        desc3:
          'वनट्रस्ट और इसकी सहायक कंपनियां और सहयोगी कंपनियां केवल उन व्यक्तियों के अनुरोधों पर कार्रवाई कर सकती हैं जिनका वनट्रस्ट या इसकी सहायक कंपनियों और सहयोगियों से सीधा संबंध है। इसमें हमारे ग्राहकों, नौकरी आवेदकों, कर्मचारियों या विपणन प्राप्तकर्ताओं के अनुरोध शामिल हैं।',
        desc4:
          'चूँकि हम B2B गोपनीयता सॉफ़्टवेयर प्रदाता (डेटा प्रोसेसर) हैं, हम उन कंपनियों की ओर से किसी भी अनुरोध का जवाब नहीं दे सकते हैं जो हमारे सॉफ़्टवेयर का उपयोग अपने गोपनीयता कार्यक्रमों के लिए करते हैं। ऐसे अनुरोधों के लिए, हम अनुशंसा करते हैं कि आप सीधे ऐसी कंपनियों से संपर्क करें।',
        desc5:
          'यदि आप किसी ऐसी कंपनी से अनुरोध करना चाहते हैं जो अपनी गोपनीयता, सुरक्षा, या तीसरे पक्ष के जोखिम कार्यक्रमों को प्रबंधित करने के लिए वनट्रस्ट का उपयोग करती है, तो कृपया सीधे उनकी वेबसाइट पर ऐसा करें।',

        desc6:
          '  नेट्रस्ट एलएलसी - 1200 एबरनेथी रोड एनई, अटलांटा, जीए 30328, यू.एस.ए. वनट्रस्ट टेक्नोलॉजी लिमिटेड - 82 सेंट जॉन सेंट, फ़ारिंगडन, लंदन, ईसी 1एम 4जेएन, यू.के. हमसे dpo@onetrust.com पर संपर्क करें गोपनीयता सूचना',
        countries: [
          {
            id: 'option-0',
            text: 'भारत',
          },
          {
            id: 'option-1',
            text: 'अमेरिका',
          },
          {
            id: 'option-2',
            text: 'चीन',
          },
          {
            id: 'option-3',
            text: 'रूस',
          },
        ],
        confirm: [
          {
            id: 'option-0',
            text: 'मैं समझता हूं',
          },
        ],
        entities: [
          {
            id: 'option-0',
            text: 'वनट्रस्ट',
          },
          {
            id: 'option-1',
            text: 'वनट्रस्ट द्वारा कन्वर्सेंट',
          },
          {
            id: 'option-2',
            text: 'वनट्रस्ट द्वारा प्लेनेटली',
          },
          {
            id: 'option-3',
            text: 'वनट्रस्ट द्वारा टगबोट लॉजिक',
          },
          {
            id: 'option-4',
            text: 'डेटा मार्गदर्शन',
          },
        ],
      },
    ],
  },
];

const DparWeb = () => {
  const [selectedTag, setSelectedTag] = useState(0);
  const [request, setRequest] = useState('');
  const [langId, setLangId] = useState(0);

  const handleLang = (e) => {
    setLangId(e.selectedItem.id);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };
  const handleChange = (e) => {
    setRequest(e.target.value);
  };

  console.log(langId);
  console.log(header[0].data[0]);

  return (
    <div className='dpar-web'>
      <div className='dpar-web-drop-div'>
        <Dropdown
          id='default'
          initialSelectedItem={header[0]}
          label='0'
          items={header}
          itemToString={(item) => (item ? item.langName : '')}
          className='dpar-web-drop'
          onChange={handleLang}
        />
      </div>
      {header[langId].data.map((head, i) => {
        return (
          <div className='dpar-web-div-main' key={i}>
            <div className='dpar-web-div1' key={i}>
              <h3 className='dpar-web-div1-h'>{head?.heading1}</h3>
              <p className='dpar-web-div1-p'>{head.desc1}</p>
              <p className='dpar-web-div1-p'>{head.desc2}</p>
              <h3 className='dpar-web-div1-h'>{head.heading2}</h3>
            </div>
            <div className='dpar-web-div2'>
              <h3 className='dpar-web-div2-h'> {head.heading3}</h3>
              <ComboBox
                onChange={() => {}}
                id='carbon-combobox'
                items={head.entities}
                downshiftProps={{
                  onStateChange: () => {
                    console.log('the state has changed');
                  },
                }}
                itemToString={(item) => (item ? item.text : '')}
                className='dpar-web-div2-combo'
              />
              <h3 className='dpar-web-div2-h'> {head.heading4}</h3>
              <div className='dpar-web-div2-div1'>
                <p
                  className={` ${
                    selectedTag === 'Platform User'
                      ? 'dpar-web-div2-div1-tag-selected'
                      : 'dpar-web-div2-div1-tag'
                  }`}
                  onClick={() => handleTagClick('Platform User')}
                >
                  {head.role1}
                </p>
                <p
                  className={` ${
                    selectedTag === 'Employee'
                      ? 'dpar-web-div2-div1-tag-selected'
                      : 'dpar-web-div2-div1-tag'
                  }`}
                  onClick={() => handleTagClick('Employee')}
                >
                  {head.role2}
                </p>
                <p
                  className={` ${
                    selectedTag === 'Job Applicant'
                      ? 'dpar-web-div2-div1-tag-selected'
                      : 'dpar-web-div2-div1-tag'
                  }`}
                  onClick={() => handleTagClick('Job Applicant')}
                >
                  {head.role3}
                </p>
                <p
                  className={` ${
                    selectedTag === 'Marketing Recipient'
                      ? 'dpar-web-div2-div1-tag-selected'
                      : 'dpar-web-div2-div1-tag'
                  }`}
                  onClick={() => handleTagClick('Marketing Recipient')}
                >
                  {head.role4}
                </p>
                <p
                  className={` ${
                    selectedTag === 'Authorized Agent'
                      ? 'dpar-web-div2-div1-tag-selected'
                      : 'dpar-web-div2-div1-tag'
                  }`}
                  onClick={() => handleTagClick('Authorized Agent')}
                >
                  {head.role5}
                </p>
              </div>
              <h3 className='dpar-web-div2-h'> {head.heading5}</h3>
              <Dropdown
                id='default'
                initialSelectedItem={head.countries[0]}
                label='Option 1'
                items={head.countries}
                itemToString={(item) => (item ? item.text : '')}
                className='dpar-web-div2-combo'
              />
              <h3 className='dpar-web-div2-h'>{head.heading6}</h3>
              <TextInput
                id='name'
                type='name'
                className='dpar-web-div2-combo'
              />
              <h3 className='dpar-web-div2-h'>{head.heading7}</h3>
              <TextInput
                id='surname'
                type='surname'
                className='dpar-web-div2-combo'
              />
              <h3 className='dpar-web-div2-h'>{head.heading8}</h3>
              <TextInput
                id='email'
                type='email'
                className='dpar-web-div2-combo'
              />
              <h3 className='dpar-web-div2-h'>{head.heading9}</h3>
              <textarea
                id='text'
                class='dpar-web-div2-req'
                rows='5'
                onChange={handleChange}
                value={request}
              />
              <h3 className='dpar-web-div2-h'>{head.heading10}</h3>
              <p className='dpar-web-div2-details'>{head.desc3}</p>
              <p className='dpar-web-div2-details'>{head.desc4}</p>
              <h3 className='dpar-web-div2-h'>{head.heading11}</h3>
              <ComboBox
                onChange={() => {}}
                id='carbon-combobox'
                items={head.confirm}
                downshiftProps={{
                  onStateChange: () => {
                    console.log('the state has changed');
                  },
                }}
                itemToString={(item) => (item ? item.text : '')}
                className='dpar-web-div2-combo'
              />
            </div>
            <div className='dpar-web-div3'>
              <FileUploaderDropContainer
                labelText={head.heading12}
                multiple={true}
                accept={['image/jpeg', 'image/png']}
                disabled={false}
                name=''
                tabIndex={0}
                className='dpar-web-div3-up'
              />
              <Button className='dpar-web-div3-b'>{head.heading13}</Button>
            </div>
            <div className='dpar-web-div4'>
              <h5 className='dpar-web-div4-h'>{head.desc5}</h5>
              <p className='dpar-web-div4-p'>{head.desc6}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DparWeb;
