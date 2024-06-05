import type {ValueOf} from 'type-fest';
import type Form from './Form';

const INPUT_IDS = {
    CATEGORY_NAME: 'categoryName',
    PAYROLL_CODE: 'payrollCode',
} as const;

type InputID = ValueOf<typeof INPUT_IDS>;

type WorkspaceCategoryForm = Form<
    InputID,
    {
        [INPUT_IDS.CATEGORY_NAME]: string;
        [INPUT_IDS.PAYROLL_CODE]: string;
    }
>;

export type {WorkspaceCategoryForm};
export default INPUT_IDS;
