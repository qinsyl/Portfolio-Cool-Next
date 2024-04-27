import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function About() {
  return (
    <div className="flex flex-col items-center px-12">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-8 md:gap-16 items-start justify-between">
            <div className="h-72 md:h-80 lg:h-[500px] col-span-6 md:col-span-4 rounded-2xl overflow-hidden">
              <Image
                isZoomed
                loading="lazy"
                className="w-full"
                alt="profile cover"
                src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png"
                width={2048}
                height={3072}
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="prose lg:prose-xl">
                  <h1 className="text-foreground">About</h1>
                  <h3 className="font-semibold text-foreground/90">
                    Qinsyl Software Engineer
                  </h3>
                  <small className="text-foreground/80">
                    qinsyl.com@gmail.com
                  </small>
                  <p className="text-foreground/80">Full-Stack Engineer</p>
                  <p className="text-foreground/80">
                    I am a software engineer who loves building things for the
                    web. I specialize in building web applications using modern
                    technologies like React, Next.js, and Node.js. I am also
                    passionate about building accessible, performant, and
                    responsive web applications. I have experience working with
                    both front-end and back-end technologies, and I am familiar
                    with the entire web development process from concept to
                    deployment.
                  </p>
                  <p className="text-foreground/80">
                    I am always looking to learn new things and improve my
                    skills. I enjoy working on challenging projects that push me
                    out of my comfort zone and help me grow as a developer. I am
                    a quick learner and a problem solver, and I am always
                    looking for new opportunities to expand my knowledge and
                    expertise.
                  </p>
                  <div className="flex gap-4 items-center flex-wrap">
                    <Button
                      className="rounded-full"
                      variant="shadow"
                      color="primary"
                      as={Link}
                      href="https://www.linkedin.com/"
                    >
                      Linkedin
                    </Button>
                    <Button
                      className="rounded-full"
                      variant="shadow"
                      color="primary"
                      as={Link}
                      href="https://github.com/"
                    >
                      Github
                    </Button>
                    <Button
                      className="rounded-full"
                      variant="shadow"
                      color="primary"
                      as={Link}
                      href="mailto:qinsyl.com@gmail.com"
                    >
                      Email
                    </Button>
                    <Button
                      className="rounded-full"
                      variant="shadow"
                      color="primary"
                      as={Link}
                      href=""
                    >
                      CV
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
