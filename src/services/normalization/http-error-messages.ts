export const errorMessageMaper: Record<string, string> = {
  // ===============================
  // Common / Auth / System Errors
  // ===============================
  "Group is not found.": "المجموعة غير موجودة.",
  "Endpoint permission is not found.": "صلاحية الوصول غير موجودة.",
  "user is not found.": "المستخدم غير موجود.",
  "Username or password is incorrect.":
    "اسم المستخدم أو كلمة المرور غير صحيحة.",
  "User is inactive.": "المستخدم غير نشط.",
  "Refresh token cannot be null.": "رمز التحديث لا يمكن أن يكون فارغًا.",
  "Password is Incorrect.": "كلمة المرور غير صحيحة.",
  "Cannot reset the password for the currently authenticated user.":
    "لا يمكن إعادة تعيين كلمة المرور للمستخدم الذي تم تسجيل دخوله حاليًا.",
  "Username already exists.": "اسم المستخدم موجود بالفعل.",
  "Cannot update a resource that's rejected.": "لا يمكن تعديل مورد تم رفضه.",
  "Cannot update a resource that's still in review.":
    "لا يمكن تعديل مورد لا يزال قيد المراجعة.",
  "This resource has an incomplete edit form, so you cannot create a new one currently.":
    "هذا المورد يحتوي على نموذج تعديل غير مكتمل، لذلك لا يمكنك إنشاء نموذج جديد حاليًا.",
  "Cannot create form because the path of the provided table is inactive or has nodes that have not been initialized.":
    "لا يمكن إنشاء النموذج لأن مسار الجدول غير نشط أو يحتوي على عقد غير مهيأة.",
  "Cannot set children that belong to ancestors or parent that belongs to descendants because that causes a loop in the tree.":
    "لا يمكن تعيين أبناء ينتمون إلى أسلاف أو أب ينتمي إلى أحفاد لأنه يسبب حلقة في الشجرة.",
  "The maximum recursion limit was reached while setting the endpoint permissions tree levels due to a loop in the tree.":
    "تم الوصول إلى الحد الأقصى للتكرار بسبب حلقة في شجرة الصلاحيات.",
  "An unexpected internal server error has occurred: no such column: common_services_endpointpermission.endpoint_type.":
    "حدث خطأ داخلي غير متوقع: العمود غير موجود.",
  "Invalid username or password.": "اسم المستخدم أو كلمة المرور غير صحيحة.",
  "User not found.": "المستخدم غير موجود.",
  "Access denied.": "تم رفض الوصول.",
  'Incorrect type. Expected pk value, received str.':"خطأ في نوع المدخل, متغير نصي غير مناسب لي PK",
  'This field is required' : "متبقي حقل لم يتم إدخال بياناته",
  'This field may not be blank':"لا يمكن ان تكون الخانة فارغه",
  "Cannot set the parent of the endpoint permission to the same endpoint":"لا يمكن ربط الصفحة بنفسها",
  "An unexpected internal server error has occurred: Request was throttled.": "وصلت الحد الاقصى للمحاولة الرجاء الانتظار ",
  "Start time of this audio is less than the end time of previous audio": "وقت البداية للاية الحالية اقل من وقت النهائية للاية السابقة حاول تقديم وقت الاية الحالية",
  "This resource has an incomplete edit form, so you cannot create a new one currently" : "لا يمكن التعديل على العنصر الحالي , حيث هناك استمارة تعديل معلقة",
  "Something went wrong , contact tech support" : "قد يكون هناك خطاء في الشهادة او شي اخر, تواصل مع الدعم التقني",
  "Cannot create form because the path of the provided table is inactive or has nodes that have not been initialized" : "لايمكن التعديل حيث مسار مراجعة التعديل المطلوب غير مفعل , اطلب من الادارة تفعيله" ,
  // ===============================
  // Table / Path / Nodes
  // ===============================

  "Table is not found.": "الجدول غير موجود.",
  "Path is not found.": "المسار غير موجود.",
  "Path is in use by a form or an edit form.":
    "المسار مستخدم من قبل نموذج أو نموذج تعديل.",
  "Node is not found.": "العقدة غير موجودة.",
  "You cannot create, modify, or delete node if its path is in use by a form or an edit form.":
    "لا يمكنك إنشاء أو تعديل أو حذف عقدة إذا كان المسار مستخدمًا.",
  "You cannot delete or edit the first node.":
    "لا يمكنك حذف أو تعديل العقدة الأولى.",
  "Path nodes have not been initialized yet.": "عقد المسار لم يتم تهيئتها بعد.",

  // ===============================
  // Transactions / Forms
  // ===============================
  "Transaction is not found.": "المعاملة غير موجودة.",
  "Cannot take action on a transaction if it is not pending.":
    "لا يمكن تنفيذ الإجراء إذا لم تكن المعاملة معلقة.",
  "First transaction cannot be returned for review.":
    "لا يمكن إعادة المعاملة الأولى للمراجعة.",
  "Form is not found.": "النموذج غير موجود.",
  "Form is already processed.": "تمت معالجة النموذج.",
  "Edit form is not found.": "نموذج التعديل غير موجود.",
  "Edit form is already processed.": "تمت معالجة نموذج التعديل.",

  // ===============================
  // Ayah / Audio / Quranic
  // ===============================
  "Ayah Audio was not found": "لم يتم العثور على تسجيل الآية.",
  "Ayah Audio already exists, you cannot add two snippets of the same ayah":
    "تسجيل الآية موجود بالفعل، لا يمكن إضافة مقطعين لنفس الآية.",
  "Ayah was not found": "الآية غير موجودة.",
  "Reciter type does not exist": "نوع القارئ غير موجود.",
  "No Page Found": "لم يتم العثور على الصفحة.",
  "The Requested Juz was Not Found": "الجزء المطلوب غير موجود.",
  "The Requested Hizb ID or Number was Not Found":
    "رقم أو معرف الحزب المطلوب غير موجود.",
  "No Surahs Found": "لم يتم العثور على سور.",
  "The Requested Reciter is not Found": "القارئ المطلوب غير موجود.",
  "The Requested Reciter Name is not Found": "اسم القارئ المطلوب غير موجود.",
  "The Requested Reciter Audio is not Found": "تسجيل القارئ غير موجود.",
  "The Requested Reciter Audio is not complete": "تسجيل القارئ غير مكتمل.",
  "The Requested Reciter Audio has exceeding snippets":
    "تسجيل القارئ يحتوي على مقاطع زائدة.",
  "The Requested Recitaion is not Found": "التلاوة المطلوبة غير موجودة.",
  "No Font file is found as per your request":
    "لم يتم العثور على ملف الخط حسب طلبك.",
    "The submitted data was not a file. Check the encoding type on the form.":"يجب ان يتم اخيار ملف من نوع صورة.",

  // ===============================
  // Lectures / Lecturer / Albums
  // ===============================
  "Personal info type is not found.": "نوع المعلومات الشخصية غير موجود.",
  "Lecture info type is not found.": "نوع معلومات المحاضرة غير موجود.",
  "Media type is not found.": "نوع الوسائط غير موجود.",
  "Tag is not found.": "الوسم غير موجود.",
  "Lecturer is not found.": "المحاضر غير موجود.",
  "Lecturer is not approved.": "المحاضر غير معتمد.",
  "Cannot delete a complete lecturer if it is not approved or it has at least one lecture.":
    "لا يمكن حذف محاضر مكتمل إذا لم يكن معتمدًا أو لديه محاضرة واحدة على الأقل.",
  "Lecture is not found.": "المحاضرة غير موجودة.",
  "Cannot delete a complete lecture if it is not approved.":
    "لا يمكن حذف محاضرة مكتملة إذا لم تكن معتمدة.",
  "Cannot final-save a lecture until it has at least one lecture info.":
    "لا يمكن حفظ المحاضرة نهائيًا حتى تحتوي على معلومات محاضرة واحدة على الأقل.",
  "Cannot final-save a lecture until it has at least one paragraph.":
    "لا يمكن حفظ المحاضرة نهائيًا حتى تحتوي على فقرة واحدة على الأقل.",
  "Cannot final-save a lecture until it has at least one media.":
    "لا يمكن حفظ المحاضرة نهائيًا حتى تحتوي على وسائط واحدة على الأقل.",
  "Lecture is already final-saved.": "تم حفظ المحاضرة نهائيًا بالفعل.",
  "Album is not found.": "الألبوم غير موجود.",
  "Associated lecturer is rejected.": "تم رفض المحاضر المرتبط.",
  "Associated lecturer is in review": "المحاضر المرتبط قيد المراجعة.",
  "Cannot delete an album if it has at least one lecture or one sub-album.":
    "لا يمكن حذف الألبوم إذا كان يحتوي على محاضرة واحدة أو ألبوم فرعي واحد على الأقل.",
  "Album which has at least one sub-album cannot be assigned as a child for another album.":
    "لا يمكن تعيين ألبوم يحتوي على ألبومات فرعية كابن لألبوم آخر.",
  "Cannot final-save a lecturer until it has at least one personal info.":
    "لا يمكن حفظ المحاضر نهائيًا حتى يحتوي على معلومات شخصية واحدة على الأقل.",
  "Personal info is not found.": "المعلومة الشخصية غير موجودة.",
  "Text link is not found.": "رابط النص غير موجود.",
  "Personal media is not found.": "الوسائط الشخصية غير موجودة.",
  "Associated personal info is rejected.": "تم رفض المعلومة الشخصية المرتبطة.",
  "Associated personal info is in review":
    "المعلومة الشخصية المرتبطة قيد المراجعة.",
  "Cannot delete personal media until it's approved (active or inactive).":
    "لا يمكن حذف الوسائط الشخصية حتى يتم اعتمادها (نشطة أو غير نشطة).",
  "Cannot delete personal info until it's approved (active or inactive).":
    "لا يمكن حذف المعلومة الشخصية حتى يتم اعتمادها (نشطة أو غير نشطة).",
  "Lecturer is already final-saved.": "تم حفظ المحاضر نهائيًا بالفعل.",
  "Media is not found.": "الوسائط غير موجودة.",
  "Cannot delete media until it's approved (active or inactive).":
    "لا يمكن حذف الوسائط حتى يتم اعتمادها (نشطة أو غير نشطة).",
  "Associated lecture info is in review":
    "معلومة المحاضرة المرتبطة قيد المراجعة.",
  "Associated lecture is rejected.": "تم رفض المحاضرة المرتبطة.",
  "lecture info is not found.": "معلومة المحاضرة غير موجودة.",
  "Cannot delete lecture info until it's approved (active or inactive).":
    "لا يمكن حذف معلومة المحاضرة حتى يتم اعتمادها (نشطة أو غير نشطة).",
  "Paragraph media is not found.": "وسائط الفقرة غير موجودة.",
  "Paragraph is not found.": "الفقرة غير موجودة.",
  "Cannot delete paragraph until it's approved (active or inactive).":
    "لا يمكن حذف الفقرة حتى يتم اعتمادها (نشطة أو غير نشطة).",
  "Number of paragraphs being reordered is not equal to the number of lecture paragraphs.":
    "عدد الفقرات المعاد ترتيبها لا يساوي عدد فقرات المحاضرة.",
  "Paragraph belongs to different lecture.": "الفقرة تنتمي لمحاضرة مختلفة.",
};
