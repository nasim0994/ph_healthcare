import { catchAsync } from '../../utils/catchAsync';
import { createAdminService, getAllUserService } from './userService';

export const getAllUserController = catchAsync(async (req, res) => {
  const result = await getAllUserService();

  res.status(200).json({
    success: true,
    message: 'all user get successfully',
    data: result,
  });
});

export const createAdminController = catchAsync(async (req, res) => {
  const result = await createAdminService(req.body);

  res.status(200).json({
    success: true,
    message: 'Admin add successfully',
    data: result,
  });
});
