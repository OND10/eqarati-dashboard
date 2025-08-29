import { errorMessageMaper } from '@/services/normalization/http-error-messages';
import { AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';

export interface ApiErrorBody {
  error: {
    code: string;
    message: string;
    validation_fields: {
      [field: string]: string[];
    };
  };
}

/**
 * Global response handler for all HTTP 1.1 Requests
 * @author Osama N Dammag
 */
export const handleResponse = async (err: AxiosError) => {
  const error = err as AxiosError<ApiErrorBody>;
  const status = error.response?.status;
  const validationError = error.response
    ? error.response?.data?.error?.validation_fields
    : {};
  let responseMessage: string;

  if (validationError && Object.keys(validationError).length > 0) {
    const errorKey = Object.keys(validationError)[0];
    responseMessage = validationError[errorKey]?.[0] ?? 'حدث خطأ غير متوقع';
  } else {
    responseMessage =
      error.response?.data?.error?.message ??
      'Something went wrong , contact tech support';
  }

  console.log('Error message to translate:', responseMessage);

  const translatedMessage =
    errorMessageMaper[responseMessage] ?? 'حدث خطأ غير متوقع. حاول مرة أخرى.';

  switch (status) {
    case StatusCodes.UNPROCESSABLE_ENTITY:
      // showToast('خطأ', translatedMessage, 'error', 3000);
      break;

    case StatusCodes.UNAUTHORIZED:
      // showToast('رفض الوصول', translatedMessage, 'error', 3000);
      break;

    case StatusCodes.BAD_REQUEST:
      // showToast('طلب غير صالح', translatedMessage, 'error', 3000);
      break;

    case StatusCodes.FORBIDDEN:
      // showToast('ممنوع', translatedMessage, 'error', 3000);
      break;

    case StatusCodes.NOT_FOUND:
      // showToast('غير موجود', translatedMessage, 'error', 3000);
      break;

    case StatusCodes.CONFLICT:
      // showToast('تعارض', 'حدث تعارض مع الطلب', 'error', 3000);
      break;

    case StatusCodes.INTERNAL_SERVER_ERROR:
      // showToast('خطأ في الخادم', translatedMessage, 'error', 3000);
      break;

    default:
      // showToast('خطأ', translatedMessage, 'error', 3000);
      break;
  }

  return null;
};
