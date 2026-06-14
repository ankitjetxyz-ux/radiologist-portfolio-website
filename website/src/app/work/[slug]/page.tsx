import { redirect } from "next/navigation";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function WorkPage({ params }: WorkPageProps) {
  await params;
  redirect("/products");
}
