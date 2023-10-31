import {
  AUDIENCE_DESIGN_ID,
  AUDIENCE_DIGITAL_ID,
  AUDIENCE_ENGINEERING_ID,
} from '../../src/lib/constants';
import mailchimpClient from '../../src/lib/constants';

interface NetlifyFunctionEvent {
  httpMethod: string;
  body: string;
}

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST',
};

exports.handler = async (event: NetlifyFunctionEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    const selectedOptionsArray = Object.keys(data.selectedOptions).filter(
      (option) => data.selectedOptions[option]
    );

    const audienceIds = [];
    for (const option of selectedOptionsArray) {
      if (option === 'Design' && AUDIENCE_DESIGN_ID) {
        audienceIds.push(AUDIENCE_DESIGN_ID);
      } else if (option === 'Digital' && AUDIENCE_DIGITAL_ID) {
        audienceIds.push(AUDIENCE_DIGITAL_ID);
      } else if (option === 'Ingénierie' && AUDIENCE_ENGINEERING_ID) {
        audienceIds.push(AUDIENCE_ENGINEERING_ID);
      }
    }
    const addListMemberPromises = audienceIds.map((audienceId) => {
      return mailchimpClient.lists.addListMember(audienceId, {
        email_address: data.email,
        status: 'subscribed',
      });
    });

    await Promise.all(addListMemberPromises);

    return {
      statusCode: 201,
      headers,
      body: `Success api :: ${data.email}`,
    };
  } catch (error) {
    return {
      statusCode: 406,
      headers,
      body: `Error api :: ${error}`,
    };
  }
};
