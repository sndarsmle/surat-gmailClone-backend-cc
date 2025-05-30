// src/services/logService.js
import { pgDB } from '../prismaClients.js';

/**
 * @param {string} action - Deskripsi aksi (e.g., "USER_LOGIN", "CREATE_SURAT")
 * @param {object} options - Opsi tambahan
 * @param {string} [options.userId] - ID user yang melakukan aksi
 * @param {string} [options.entity] - Entitas yang terlibat (e.g., "User", "Surat")
 * @param {string} [options.entityId] - ID entitas yang terlibat
 * @param {object} [options.details] - Detail tambahan (JSON)
 * @param {string} [options.ipAddress] - Alamat IP requester
 */
const logActivity = async (action, options = {}) => {
  try {
    await pgDB.activityLog.create({
      data: {
        action,
        userId: options.userId,
        entity: options.entity,
        entityId: options.entityId,
        details: options.details,
        ipAddress: options.ipAddress,
      },
    });
  } catch (error) {
    console.error('Failed to log activity:', error);
    // Pertimbangkan mekanisme logging error yang lebih robust di production
  }
};

export default logActivity;