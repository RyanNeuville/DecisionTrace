import { prisma } from "@/lib/prisma";

type ActionType =
  | "DECISION_CREATED"
  | "DECISION_UPDATED"
  | "DECISION_VALIDATED"
  | "DECISION_DELETED"
  | "OPTION_ADDED"
  | "OPTION_UPDATED"
  | "OPTION_DELETED"
  | "CRITERIA_ADDED"
  | "CRITERIA_UPDATED"
  | "EVALUATION_ADDED"
  | "TRANSACTION_ADDED"
  | "TRANSACTION_UPDATED"
  | "TRANSACTION_DELETED";

type EntityType =
  | "User"
  | "Decision"
  | "Transaction"
  | "Option"
  | "Criteria"
  | "Evaluation";

export async function logAction({
  userId,
  action,
  details,
  entityId,
  description,
}: {
  userId: string;
  action: ActionType;
  details: EntityType;
  entityId?: string;
  description?: string;
}) {
  await prisma.actionLog.create({
    data: {
      userId,
      action,
      details,
      createdAt: new Date(),
    },
  });
}
