import axios from 'axios';
import toast from 'react-hot-toast';

export const patchIssue = (issueId: number, data: object) => {
    return axios
        .patch('/api/issues/' + issueId, data)
        .then(() => toast.success('Changes saved successfully'))
        .catch(() => toast.error('Changes could not be saved.'));
};
