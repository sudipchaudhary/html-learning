import os

from os import path

sub_files = ['resume.sub.html']

def reset():
    for file in sub_files:
        
        org_file = file.replace(".sub","")
        sub_file = "dev-"+org_file

        if path.exists(org_file) and path.exists(sub_file):
            os.rename(org_file,"sub-"+org_file);
            os.rename(sub_file, org_file)

def main():
    try:
        for file in sub_files:
            
            org_file = file.replace(".sub","")

            if path.exists(org_file) and path.exists(file):
                os.rename(org_file,"dev-"+org_file);
                os.rename(file, org_file)
    finally:
        reset()

if __name__ == "__main__":
    main()