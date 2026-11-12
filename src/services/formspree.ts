export const FORMSPREE_FORM_ENDPOINT = 'https://formspree.io/f/moedvalj';

type FormspreeSubmissionResult =
  | { success: true }
  | { success: false; reason: 'network' }
  | { success: false; reason: 'http'; statusCode: number };

export async function submitFormspreeForm(
  fields: Record<string, string>,
): Promise<FormspreeSubmissionResult> {
  try {
    const response = await fetch(FORMSPREE_FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    });

    if (!response.ok) {
      return { success: false, reason: 'http', statusCode: response.status };
    }

    return { success: true };
  } catch (error) {
    if (!(error instanceof TypeError)) {
      throw error;
    }

    return { success: false, reason: 'network' };
  }
}
